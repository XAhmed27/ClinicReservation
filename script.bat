echo "Building Angular image..."
docker build -t  angularimg C:\Users\Youssef\OneDrive\Documents\GitHub\ClinicReservation\Frontend 
 
echo "Building backend image..."
docker build -t  backendimg C:\Users\Youssef\OneDrive\Documents\GitHub\ClinicReservation\Backend

echo "Building postgres image..."
docker build -t  postgresimg C:\Users\Youssef\OneDrive\Documents\GitHub\ClinicReservation\Backend\DB

echo "Building rabbitmq image..."
docker build -t  rabbitmq C:\Users\Youssef\OneDrive\Documents\GitHub\ClinicReservation\Backend\rabbitmq



echo "Running Angular and Node.js containers..."

docker run -d -p 3500:3000 --name nodejs2 -e DB_HOST=bmvwgqd8v4agzcouc8pt-postgresql.services.clever-cloud.com -e DB_PASSWORD=o5EJMvWjeyE0C79mDUeA26U2cmvdLL -e DB_USERNAME=umsrgtvtaegf6vxscbha -e DB_DBNAME=bmvwgqd8v4agzcouc8pt -e PORT=50013 --network=bridge3  backendimg


docker run -d -p 4200:80 --name angularoriginal2 --network=bridge3 angularimg

echo "Running postgresand rabbitmq containers..."

docker run --name postgres2 -e POSTGRES_PASSWORD=secret -e DB_HOST=bmvwgqd8v4agzcouc8pt-postgresql.services.clever-cloud.com -e DB_PASSWORD=o5EJMvWjeyE0C79mDUeA26U2cmvdLL -e DB_USERNAME=umsrgtvtaegf6vxscbha -e DB_DBNAME=bmvwgqd8v4agzcouc8pt -e PORT=50013 --network=bridge3 -d  postgresimg


docker run --rm -it  -p 15672:15672 -p 5672:5672 --name rabbitmq2 --network=bridge3 -d  rabbitmq:3-management

echo "Containers are up and running!"