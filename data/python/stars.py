# probably need to change paths if you want to use this code
filepath = r"c:\0Kaye\School\compmed\test\data\reducedhyg.csv"
with open(filepath) as f:
    lines = f.readlines()

# Here's a list of all the Star IDs we're interested in
Capricorn = '100064,100345,104139,105515,106985,107556,105881,102485,102978'
Aries = '13209,9884,8903,8832'
Taurus = '25428,21881,20889,21421,26451,20205,20455,18724,15900,20894,20648,17847'
Cancer = '43103,42806,40843,42911,40526,44066'
Leo = '57632,54879,49669,49583,50583,54872,50335,48455,47908'
Virgo = '57380,60030,61941,65474,69427,69701,71957,66249,68520,72220,63090,63608'
Libra= '77853,76333,74785,72622,73714'
Scorpio='85927,86670,87073,86228,84143,82671,82514,82396,81266,80763,78401,78265,78820'
Aquarius='106278,109074,110395,110960,111497,112961,114855,115438,110003,109139,111123,112716,113136,114341,102618'
Gemini='31681,34088,35550,35350,32362,36962,37740,37826,36046,34693,36850,33018,32246,30883,30343,29655,28734'
Pisces='4889,5742,6193,7097,8198,9487,8833,7884,7007,4906,3760,1645,118268,116771,116928,115738,114971,115830'
Saggittarius='89931,90496,89642,90185,88635,87072,93506,92041,89341,93864,92855,93085,93683,94820,95168,96406,98688,98412,98032,95347,95294'

def grab(constName,litName):
	wanted = constName.split(",") 

	filtered = [line for line in lines if line.split(",")[0] in wanted]

	# Write all the lines from the filtered list back out to a new file
	f = open(r"c:\0Kaye\School\compmed\test\data\data\const_list.csv", "a")
	for line in filtered:
	  f.write(litName+",")
	  f.write(line)

	f.close()

grab(Capricorn,'Capricorn')
grab(Aries,'Aries')
grab(Taurus,'Taurus')
grab(Cancer,'Cancer')
grab(Leo,'Leo')
grab(Virgo,'Virgo')
grab(Libra,'Libra')
grab(Scorpio,'Scorpio')
grab(Aquarius,'Aquarius')
grab(Gemini,'Gemini')
grab(Pisces,'Pisces')
grab(Saggittarius,'Saggittarius')