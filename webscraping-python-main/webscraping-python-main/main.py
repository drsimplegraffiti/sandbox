from bs4 import BeautifulSoup

# Access file in project folder
with open('index.html', 'r') as html_file:
    content = html_file.read()
    soup  = BeautifulSoup(content, 'lxml')
    course_cards = soup.find_all('div', class_ ='card' )
    for course in course_cards:
        course_name = course.h5.text
        course_price = course.a.text.split()[-1]
        print(f'{course_name} cost {course_price}')