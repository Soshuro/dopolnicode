const themes = {

    // ==================== ЦИКЛЫ ====================
    loops: {
        backgrounds: [
            "images/loops/bg0.jpg",
            "images/loops/bg1.jpg",
            "images/loops/bg2.jpg",
            "images/loops/bg3.jpg",
            "images/loops/bg4.jpg"
        ],
        questions: [
            {
                title: "Цикл for. Вывод элементов списка.",
                code:
`fruits = ["яблоко", "банан", "вишня"]

___ fruit in fruits:
    print(fruit)
# Вывод: яблоко, банан, вишня`,
                answers: ["while", "foreach", "for"],
                correct: 2,
                explanation: "В Python для перебора элементов коллекции используется цикл for."
            },
            {
                title: "Цикл for с функцией range().",
                code:
`___ i in range(1, 6):
    print(i)
# Вывод: 1 2 3 4 5`,
                answers: ["for", "repeat", "loop"],
                correct: 0,
                explanation: "range() используется вместе с циклом for для генерации последовательности чисел."
            },
            {
                title: "Цикл while. Подсчёт до заданного числа.",
                code:
`count = 0
while count ___ 5:
    print(count)
    count += 1
# Вывод: 0 1 2 3 4`,
                answers: [">= 5", "< 5", "== 5"],
                correct: 1,
                explanation: "Цикл должен работать пока count меньше 5. При count == 5 условие станет ложным и цикл завершится."
            },
            {
                title: "Оператор break в цикле while.",
                code:
`number = 0
while True:
    if number == 3:
        ___
    number += 1
print("Стоп!")`,
                answers: ["stop", "exit()", "break"],
                correct: 2,
                explanation: "break полностью завершает выполнение цикла. stop — не существует, exit() завершает всю программу."
            },
            {
                title: "Цикл for с накоплением суммы.",
                code:
`numbers = [2, 4, 6, 8]
total = 0
for num in numbers:
    total ___ num
print(total)
# Вывод: 20`,
                answers: ["+=", "=+", "="],
                correct: 0,
                explanation: "+= прибавляет значение к переменной. =+ — не является оператором Python, а = просто перезапишет total."
            }
        ]
    },

    // ==================== СПИСКИ ====================
    lists: {
        backgrounds: [
            "images/lists/bg0.jpg",
            "images/lists/bg1.jpg",
            "images/lists/bg2.jpg",
            "images/lists/bg3.jpg",
            "images/lists/bg4.jpg"
        ],
        questions: [
            {
                title: "Добавление элемента в список.",
                code:
`fruits = ["яблоко", "банан"]
fruits.___("вишня")
print(fruits)
# Вывод: ["яблоко", "банан", "вишня"]`,
                answers: ["add(\"вишня\")", "append(\"вишня\")", "insert(\"вишня\")"],
                correct: 1,
                explanation: "Метод append() добавляет элемент в конец списка. insert() требует указать индекс, add() не существует."
            },
            {
                title: "Длина списка.",
                code:
`numbers = [1, 2, 3, 4, 5]
result = ___(numbers)
print(result)
# Вывод: 5`,
                answers: ["size", "count", "len"],
                correct: 2,
                explanation: "Функция len() возвращает количество элементов в списке. size и count — не встроенные функции Python."
            },
            {
                title: "Удаление элемента по индексу.",
                code:
`colors = ["красный", "зелёный", "синий"]
colors.___(1)
print(colors)
# Вывод: ["красный", "синий"]`,
                answers: ["delete(1)", "pop(1)", "remove(1)"],
                correct: 1,
                explanation: "Метод pop(i) удаляет элемент по индексу. remove() удаляет по значению, delete() не существует."
            },
            {
                title: "Обращение к элементу по индексу.",
                code:
`names = ["Алиса", "Боб", "Карл"]
print(names[___])
# Вывод: Боб`,
                answers: ["0", "1", "2"],
                correct: 1,
                explanation: "Индексация в Python начинается с 0. \"Боб\" находится на позиции 1."
            },
            {
                title: "Сортировка списка.",
                code:
`nums = [3, 1, 4, 1, 5, 9]
nums.___()
print(nums)
# Вывод: [1, 1, 3, 4, 5, 9]`,
                answers: ["order()", "sort()", "arrange()"],
                correct: 1,
                explanation: "Метод sort() сортирует список по возрастанию. order() и arrange() не существуют в Python."
            }
        ]
    },

    // ==================== СТРОКИ ====================
    strings: {
        backgrounds: [
            "images/strings/bg0.jpg",
            "images/strings/bg1.jpg",
            "images/strings/bg2.jpg",
            "images/strings/bg3.jpg",
            "images/strings/bg4.jpg"
        ],
        questions: [
            {
                title: "Метод upper(). Верхний регистр.",
                code:
`text = "python"
print(text.___())
# Вывод: PYTHON`,
                answers: ["upper", "big", "up"],
                correct: 0,
                explanation: "upper() переводит все символы строки в верхний регистр."
            },
            {
                title: "Метод lower(). Нижний регистр.",
                code:
`text = "PYTHON"
print(text.___())
# Вывод: python`,
                answers: ["down", "lower", "small"],
                correct: 1,
                explanation: "lower() переводит все символы строки в нижний регистр."
            },
            {
                title: "Метод replace(). Замена подстроки.",
                code:
`text = "Привет, мир!"
print(text.___("мир", "Python"))
# Вывод: Привет, Python!`,
                answers: ["swap", "change", "replace"],
                correct: 2,
                explanation: "replace(old, new) заменяет все вхождения подстроки old на new."
            },
            {
                title: "Метод split(). Разбивка строки.",
                code:
`text = "яблоко банан вишня"
words = text.___()
print(words)
# Вывод: ["яблоко", "банан", "вишня"]`,
                answers: ["split", "divide", "cut"],
                correct: 0,
                explanation: "split() разбивает строку по пробелам (или другому разделителю) и возвращает список."
            },
            {
                title: "Длина строки.",
                code:
`word = "Python"
print(___(word))
# Вывод: 6`,
                answers: ["size", "count", "len"],
                correct: 2,
                explanation: "len() возвращает количество символов в строке. size и count — не встроенные функции Python для строк."
            }
        ]
    },

    // ==================== ПЕРЕМЕННЫЕ ====================
    variables: {
        backgrounds: [
            "images/variables/bg0.jpg",
            "images/variables/bg1.jpg",
            "images/variables/bg2.jpg",
            "images/variables/bg3.jpg",
            "images/variables/bg4.jpg"
        ],
        questions: [
            {
                title: "Создание переменной.",
                code:
`name ___ "Alex"
print(name)
# Вывод: Alex`,
                answers: ["==", "=", "=>"],
                correct: 1,
                explanation: "= — оператор присваивания. == — оператор сравнения, => — не существует в Python."
            },
            {
                title: "Переменная с числом.",
                code:
`age ___ 18
print(age + 2)
# Вывод: 20`,
                answers: ["==", "=>", "="],
                correct: 2,
                explanation: "Для присваивания значения переменной используется одиночный знак =."
            },
            {
                title: "Обмен значений переменных.",
                code:
`a = 5
b = 10
a, b ___ b, a
print(a, b)
# Вывод: 10 5`,
                answers: ["==", "=>", "="],
                correct: 2,
                explanation: "Python позволяет менять значения переменных местами через множественное присваивание с =."
            },
            {
                title: "Переменная булевого типа.",
                code:
`is_active ___ True
print(is_active)
# Вывод: True`,
                answers: ["==", "=", ":="],
                correct: 1,
                explanation: "= присваивает значение. == сравнивает. := — морж-оператор, используется в условиях, не при объявлении."
            },
            {
                title: "Увеличение значения переменной.",
                code:
`counter = 0
counter ___ 1
print(counter)
# Вывод: 1`,
                answers: ["+=", "=+", "++"],
                correct: 0,
                explanation: "+= прибавляет значение к переменной. ++ не существует в Python, =+ — не оператор."
            }
        ]
    },

    // ==================== УСЛОВИЯ ====================
    conditions: {
        backgrounds: [
            "images/conditions/bg0.jpg",
            "images/conditions/bg1.jpg",
            "images/conditions/bg2.jpg",
            "images/conditions/bg3.jpg",
            "images/conditions/bg4.jpg"
        ],
        questions: [
            {
                title: "Условие if.",
                code:
`x = 5
___ x > 3:
    print("Да")
# Вывод: Да`,
                answers: ["if", "while", "for"],
                correct: 0,
                explanation: "if используется для проверки условия. Если условие истинно — выполняется блок кода."
            },
            {
                title: "Ветка else.",
                code:
`x = 2
if x > 5:
    print("Больше 5")
___:
    print("Не больше 5")
# Вывод: Не больше 5`,
                answers: ["elif", "except", "else"],
                correct: 2,
                explanation: "else выполняется, когда условие if ложно. elif — для дополнительного условия, except — для обработки ошибок."
            },
            {
                title: "Дополнительное условие elif.",
                code:
`score = 75
if score >= 90:
    print("Отлично")
___ score >= 60:
    print("Хорошо")
else:
    print("Плохо")
# Вывод: Хорошо`,
                answers: ["else", "elif", "if"],
                correct: 1,
                explanation: "elif позволяет проверить дополнительное условие, если предыдущее if было ложным."
            },
            {
                title: "Оператор сравнения ==.",
                code:
`password = "1234"
if password ___ "1234":
    print("Верно!")
# Вывод: Верно!`,
                answers: ["=", "===", "=="],
                correct: 2,
                explanation: "== сравнивает два значения. = — присваивание, === — не существует в Python."
            },
            {
                title: "Логический оператор and.",
                code:
`age = 20
has_ticket = True
if age >= 18 ___ has_ticket:
    print("Проходите!")
# Вывод: Проходите!`,
                answers: ["or", "and", "not"],
                correct: 1,
                explanation: "and — оба условия должны быть истинными. or — хотя бы одно, not — инвертирует условие."
            }
        ]
    },

    // ==================== ВВОД И ВЫВОД ====================
    input: {
        backgrounds: [
            "images/input/bg0.jpg",
            "images/input/bg1.jpg",
            "images/input/bg2.jpg",
            "images/input/bg3.jpg",
            "images/input/bg4.jpg"
        ],
        questions: [
            {
                title: "Ввод данных от пользователя.",
                code:
`name = ___("Введите имя: ")
print("Привет,", name)`,
                answers: ["print", "scan", "input"],
                correct: 2,
                explanation: "input() считывает строку, введённую пользователем. print() выводит данные, scan() не существует в Python."
            },
            {
                title: "Вывод нескольких значений.",
                code:
`a = 3
b = 7
___( a, "+", b, "=", a + b )
# Вывод: 3 + 7 = 10`,
                answers: ["show", "echo", "print"],
                correct: 2,
                explanation: "print() выводит одно или несколько значений через пробел. show и echo не существуют в Python."
            },
            {
                title: "Преобразование ввода в число.",
                code:
`age = ___(input("Ваш возраст: "))
print(age + 1)`,
                answers: ["str", "float", "int"],
                correct: 2,
                explanation: "input() всегда возвращает строку. int() преобразует строку в целое число. str() — в строку, float() — в дробное число."
            },
            {
                title: "Вывод без переноса строки.",
                code:
`print("Привет", ___)
print("мир!")
# Вывод: Привет мир!`,
                answers: ["end=\" \"", "sep=\"\"", "stop=True"],
                correct: 0,
                explanation: "end=\" \" заменяет символ переноса строки на пробел, поэтому следующий print() продолжит на той же строке."
            },
            {
                title: "Форматированный вывод f-строки.",
                code:
`name = "Алиса"
age = 17
print(___"Меня зовут {name}, мне {age} лет")
# Вывод: Меня зовут Алиса, мне 17 лет`,
                answers: ["s", "f", "r"],
                correct: 1,
                explanation: "Префикс f перед строкой делает её f-строкой: выражения в {} вычисляются и подставляются в текст."
            }
        ]
    }
};

// ==================== СОСТОЯНИЕ ====================
let currentTheme = null;
let currentQuestion = 0;
let score = 0;
let backgroundLevel = 0;
let answered = false;

// ==================== DOM ====================
const mainMenu      = document.getElementById("mainMenu");
const themesScreen  = document.getElementById("themesScreen");
const quizScreen    = document.getElementById("quizScreen");
const resultScreen  = document.getElementById("resultScreen");

const startBtn      = document.getElementById("startBtn");
const backMenuBtn   = document.getElementById("backMenuBtn");

const questionTitle = document.getElementById("questionTitle");
const questionCode  = document.getElementById("questionCode");
const answersBox    = document.getElementById("answersBox");
const explanationBox= document.getElementById("explanationBox");
const actionBtn     = document.getElementById("actionBtn");

const scoreText     = document.getElementById("score");
const progressBar   = document.getElementById("progressBar");
const finalScore    = document.getElementById("finalScore");
const stars         = document.getElementById("stars");

const bgCurrent     = document.getElementById("bgCurrent");
const bgNext        = document.getElementById("bgNext");

const correctSound  = document.getElementById("correctSound");
const wrongSound    = document.getElementById("wrongSound");
const clickSound    = document.getElementById("clickSound");

correctSound.volume = 0.15;
wrongSound.volume   = 0.15;
clickSound.volume   = 0.1;

// ==================== НАВИГАЦИЯ ====================
function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

startBtn.addEventListener("click", () => {
    clickSound.play();
    showScreen(themesScreen);
});

document.querySelectorAll(".theme-card").forEach(card => {
    card.addEventListener("click", () => {
        clickSound.play();
        currentTheme    = card.dataset.theme;
        currentQuestion = 0;
        score           = 0;
        backgroundLevel = 0;
        scoreText.textContent = score;
        showScreen(quizScreen);
        // Установить первый фон сразу без анимации
        const firstBg = themes[currentTheme].backgrounds[0];
        bgCurrent.style.backgroundImage = `url("${firstBg}")`;
        bgNext.style.backgroundImage    = "";
        bgNext.style.opacity            = "0";
        loadQuestion();
    });
});

backMenuBtn.addEventListener("click", () => {
    showScreen(mainMenu);
});

// ==================== ПЛАВНАЯ СМЕНА ФОНА ====================
function transitionBackground(newUrl) {
    bgNext.style.backgroundImage = `url("${newUrl}")`;
    bgNext.style.opacity = "1";

    setTimeout(() => {
        bgCurrent.style.backgroundImage = `url("${newUrl}")`;
        bgNext.style.opacity = "0";
    }, 1000); // после завершения transition
}

// ==================== ВОПРОСЫ ====================
function loadQuestion() {
    answered = false;
    actionBtn.textContent = "Проверить";

    const theme = themes[currentTheme];
    const q     = theme.questions[currentQuestion];

    questionTitle.textContent = q.title;
    questionCode.textContent  = q.code;

    answersBox.innerHTML          = "";
    explanationBox.style.display  = "none";

    q.answers.forEach((answer, index) => {
        const label = document.createElement("label");
        label.classList.add("answer");
        label.style.animationDelay = `${index * 0.15}s`;
        label.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer}`;
        answersBox.appendChild(label);
    });

    updateProgress();
}

function updateProgress() {
    const total   = themes[currentTheme].questions.length;
    const percent = (currentQuestion / total) * 100;
    progressBar.style.width = percent + "%";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= themes[currentTheme].questions.length) {
        finishQuiz();
        return;
    }
    loadQuestion();
}

function finishQuiz() {
    showScreen(resultScreen);
    finalScore.textContent = `Ваш результат: ${score} очков`;
    const total = themes[currentTheme].questions.length;
    const maxScore = total * 20;

    if (score >= maxScore * 0.8) {
        stars.textContent = "⭐⭐⭐";
    } else if (score >= maxScore * 0.5) {
        stars.textContent = "⭐⭐";
    } else {
        stars.textContent = "⭐";
    }
}

// ==================== ПРОВЕРКА ОТВЕТА ====================
actionBtn.addEventListener("click", () => {
    if (answered) {
        nextQuestion();
        return;
    }

    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Выберите ответ");
        return;
    }

    answered = true;
    actionBtn.textContent = "Далее";

    const answer = Number(selected.value);
    const q      = themes[currentTheme].questions[currentQuestion];

    if (answer === q.correct) {
        score += 20;
        correctSound.play();
        selected.parentElement.classList.add("correct");

        // Плавная смена фона при правильном ответе
        if (backgroundLevel < themes[currentTheme].backgrounds.length - 1) {
            backgroundLevel++;
            transitionBackground(themes[currentTheme].backgrounds[backgroundLevel]);
        }
    } else {
        score -= 5;
        wrongSound.play();
        selected.parentElement.classList.add("wrong");
    }

    scoreText.textContent        = score;
    explanationBox.style.display = "block";
    explanationBox.textContent   = q.explanation;
});
