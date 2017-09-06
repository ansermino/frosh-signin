mongo -u frosh -p frosh --eval "db.dropDatabase()" ds127564.mlab.com:27564/frosh
mongoimport -u frosh -p frosh -h ds127564.mlab.com --port=27564 -d frosh -c students --type csv --file students.csv --headerline
