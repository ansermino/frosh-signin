mongo frosh --eval "db.dropDatabase()"
mongoimport -d frosh -c students --type csv --file students.csv --headerline
