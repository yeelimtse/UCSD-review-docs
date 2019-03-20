JFLAGS = -cp					# flag
JC = javac						# compiler
JVM = java 						# execution
JDBC = .:sqlite-jdbc-3.8.7.jar	# JDBC package

default: run

classes: 
	$(JC) PA2.java

run: classes
	$(JVM)$(JFLAGS)$(JDBC) PA2

test1: classes
	rm pa2.db
	sqlite3 pa2.db < input1.sql
	sqlite3 pa2.db < result1.sql
	$(JVM)$(JFLAGS)$(JDBC) PA2

test2: classes
	rm pa2.db
	sqlite3 pa2.db < input2.sql
	sqlite3 pa2.db < result2.sql
	$(JVM)$(JFLAGS)$(JDBC) PA2

clean:
	$(RM) *.class