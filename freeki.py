import argparse
import re
import time

parser = argparse.ArgumentParser()
parser.add_argument("task", help="What you want to do",
                    choices=["prune", "build", "all"])
args = parser.parse_args()


def prune():
    question_re = re.compile(r"\d+\. (.*) Correct!")
    with open("questions.txt", "r") as qfile:
        questions = set()
        qlines = qfile.readlines()
        qlen = len(qlines)
        for line in qlines:
            match = question_re.match(line)
            if match is not None:
                questions.add(match.group(1))
    with open("questions.txt", "w") as wfile:
        squestions = list(sorted(questions))
        for sq in squestions:
            text = f"0. {sq} Correct!\n".replace("  ", " ")
            wfile.write(text)
    print(f"Pruned {qlen} questions down to {len(questions)}")


def build():
    question_re = re.compile(r"\d+\. (.*) Answer: (.*) Correct!")
    js_re = re.compile(r"\{js_text\}")
    version_re = re.compile(r"\{version\}")
    js_text = ""
    with open("questions.txt", "r") as qfile:
        qlines = qfile.readlines()
        for line in qlines:
            match = question_re.match(line.replace("\"", "\\\""))
            js_text += f"    is(\"{match.group(1)}\", \"{match.group(2)}\")\n"
    with open("template.js", "r") as js_file:
        template = js_file.read()
        js_text = js_re.sub(js_text, template)
        js_text = version_re.sub(str(time.time()), js_text)
    with open("freeki.user.js", "w") as js_file:
        js_file.write(js_text)
    print("Built freeki.user.js")


if args.task == "prune":
    prune()
elif args.task == "build":
    build()
elif args.task == "all":
    prune()
    build()
