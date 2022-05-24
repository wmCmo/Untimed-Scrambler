import random as r


FACE = [['U', 'D'], ['F', 'B'], ['L', 'R']]
SUFF = ['\'', '2', ""]


def push(letter, result):
    result.append(letter)
    suff = r.sample(SUFF, 1)[0]
    result[-1] = result[-1] + suff
    return result


def generate():
    result = []
    letter = r.sample(FACE, 1)[0][r.randint(0, 1)][0]
    result = push(letter, result)
    first = True

    while len(result) < 20:
        letter = r.sample(FACE, 1)[0][r.randint(0, 1)][0]
        if not first:
            indx = repeat = 0
            for index, j in enumerate(FACE):
                if ((result[-1][0] in j) and (result[-2][0] in j)):
                    repeat += 1
                    indx = index
                    break
            if repeat > 0:
                print('here')
                if letter not in FACE[indx]:
                    result = push(letter, result)
            else:
                if (letter != result[-1][0]):
                    result = push(letter, result)

        else:
            if (letter != result[-1][0]):
                result = push(letter, result)
                first = False
    return ' '.join(result)


print(generate())
