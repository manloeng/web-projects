from tweepy import OAuthHandler
from tweepy import API
from tweepy import Cursor
from datetime import datetime, date, time, timedelta
from collections import Counter
import csv
import sys
import re

consumer_key = '86knabsXSE98VuXWFF3hBdza9'
consumer_secret = 'BnS4zWYwhwbUSB4Td4tPJkrLjTUxdKPNrACc23yfxgKiSGwi8R'
access_token = '129795060-w1zp73oPgKutMKlHgKzYmC8TJhGDH6TfeN5heozI'
access_token_secret = 'p5HQvkfzaDB25oJxmCkJXN5IRFH8JWMpKrfc3PpeMSmCF'

auth = OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
auth_api = API(auth)
Mcaffe = 'officialmcafee'
account = auth_api.get_user( screen_name = Mcaffe )
#print( "Big Man Mcaffee has tweeted " + repr( account.statuses_count ) )

usedCount = 0
totalCount = 0

#line = line.replace('\n','')
with open('C:\\Users\\GG\\Desktop\\JohnDateAndTextReplyOnly.txt', mode='w') as file:
    for status in Cursor(auth_api.user_timeline, id=Mcaffe, tweet_mode='extended').items():
        #file_writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        text = status.full_text
        text = re.sub(r"http\S+", " ", text)
        text = text.replace('\n','')   #could probably one line this but i'm lazy boi
        text = text.replace(',','.')
        #if status.in_reply_to_status_id != None:
           # file.write(text + '\n')
           # print( text )
        if status.in_reply_to_status_id == None:
            try:
                str(text)
                file.write( str(status.created_at)[0:10] + ',' +  str(text) + '\n' )
                usedCount += 1 #idk if u can ++ in python
            except: #hack lol
                pass
        #else:
           # text = re.sub(r"@\S+ ","", text) #getting rid of @ mentions proud of this one
           # file.write( str(status.created_at)[0:10] + ',' +  str(text) + '\n' )

        if totalCount%100 == 0:
            print( 'scraped ' + str(totalCount) + ' tweets and ' + str( usedCount)+ ' usable tweets')
        totalCount += 1
        #if totalCount == 200:
            #break

file.close()