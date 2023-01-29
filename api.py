from os import system
import time

class Animation:
	def __init__(self , loop=0, time = 0.001):
		self.loop = loop
		self.time = time/100
		
	def make(self , text=":)"):
		if self.loop == 0:
			num = 0
			while True:
				num += 1
				print(" " * num + text)
				time.sleep(self.time)
				system("clear")
