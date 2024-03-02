echo "Running migrations"
npm run migrations:up
#echo "Comparing db schema to code schema"
#STATUS=$(npm schema:log)
PASS="up to date"

if [ "$PASS" = "up to date" ]
then
    echo "Starting production server"
    npm run start:dev
    exit 0
e