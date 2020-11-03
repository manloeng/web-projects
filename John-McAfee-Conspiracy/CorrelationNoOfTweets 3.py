import csv
import matplotlib.pyplot as plt
from numpy import mean
from numpy import std
from numpy import cov
from scipy.stats import spearmanr
from scipy.stats import pearsonr
import json

tweetCountList = []
with open('C:\\Users\\GG\\Desktop\\JohnDateAndTextIncReplies.txt') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    dateTweetDict = dict() #the c++ way
    for row in csv_reader:
        if row[0] in dateTweetDict:
            dateTweetDict[row[0]] += 1
        else:
            dateTweetDict[row[0]] = 1

    for key in sorted(dateTweetDict.keys()):
        tweetCountList.append(dateTweetDict[key])
        #print("%s: %s" % (key, dateTweetDict[key]))

btcChangeList = []
with open('C:\\Users\\GG\\Desktop\\btc.txt') as btcFile:
    btc_reader = csv.reader(btcFile, delimiter=',')
    datePriceDict = dict()  # the c++ way
    lastPrice = 0
    lastDate = ''
    count = 0
    badDate = ''
    #badDate ='2019-09-13'

    for row in btc_reader:
        if ( count != 0 and row[0] != '2019-09-08' and row[0] != '2019-09-18' and row[0] != badDate ):
            datePriceDict[lastDate] = float(row[1]) - float(lastPrice)
        count += 1
        lastPrice = float(row[1])
        lastDate = row[0]
    for key in sorted(datePriceDict.keys()):
        btcChangeList.append(datePriceDict[key])
        #print("%s: %s" % (key, datePriceDict[key]))




tweetCountList = tweetCountList[1::]
epochDays = range(1,len(tweetCountList) + 1)
print( len(tweetCountList))
print( len(btcChangeList))


fig, ax1 = plt.subplots()

color = 'tab:red'
ax1.set_xlabel('Days since the tweet epoch (13/08/2019) (n = 69)')
ax1.set_ylabel('Next day price bitcoin price change (btc)', color=color)
ax1.plot(epochDays, btcChangeList, color=color)
ax1.tick_params(axis='y', labelcolor=color)

ax2 = ax1.twinx()  # instantiate a second axes that shares the same x-axis

color = 'tab:blue'
ax2.set_ylabel('Number of McAffe tweets per day (tweets)', color=color)  # we already handled the x-label with ax1
ax2.plot(epochDays, tweetCountList, color=color)
ax2.tick_params(axis='Number of tweets per day', labelcolor=color)

fig.tight_layout()  # otherwise the right y-label is slightly clipped
plt.title( 'How John Mcaffe is manipulating the bitcoin price via tweet density - spearmans correlation coefficient: 0.281')
plt.show()


corr, _ = spearmanr(tweetCountList, btcChangeList)
print('Spearmans correlation: %.3f' % corr)

f = open('C:\\Users\\GG\\Desktop\\sentiment.txt', 'r')
joyDict = {}
sadnessDict = {}
your_dictionary = json.loads(f.read())
for key in your_dictionary:
    for dataPoint in (your_dictionary[key]["tones"]):
        if ( dataPoint['tone_id'] == 'joy'):
            joyDict[key] = dataPoint['score']
        if ( dataPoint['tone_id'] == 'sadness'):
            sadnessDict[key] = dataPoint['score']



dates = []
dates2 = []
joy = []
sadness = []
for key in sorted(joyDict):
    dates.append(key)
    joy.append(joyDict[key])

for key in sorted(sadnessDict):
    dates2.append( key )
    sadness.append(sadnessDict[key])



plt.plot(dates, joy, color='r')
plt.xticks(rotation=90)
plt.title( 'Sentiment analysis of Joy from John Mcafee"s tweets')
plt.xlabel('date')
plt.ylabel('IBM watson JOY sentiment analysis score (0-1)')
plt.show()




# plt.plot(epochDays, btcChangeList, color='orange')

