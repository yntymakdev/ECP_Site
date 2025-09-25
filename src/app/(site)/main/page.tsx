// "use client";
// import React, { useState, useEffect } from "react";

// const WrestlingAcademy = () => {
//   const [activeTab, setActiveTab] = useState("program");
//   const [selectedCourse, setSelectedCourse] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [scrolled, setScrolled] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     course: "",
//     message: "",
//   });

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const courses = [
//     {
//       id: "beginner",
//       name: "Начинающий борец",
//       level: "Новичок",
//       duration: "3 месяца",
//       lessons: 24,
//       price: "15,000",
//       monthlyPrice: "5,000",
//       schedule: "3 раза в неделю по 2 часа",
//       maxStudents: 12,
//       description:
//         "Комплексная программа для новичков с изучением основ вольной борьбы и базовой физической подготовки",
//       goals: [
//         "Освоение правильной техники безопасности",
//         "Изучение базовых стоек и передвижений",
//         "Развитие координации и гибкости",
//         "Понимание основных правил соревнований",
//       ],
//       includes: [
//         "Изучение основных стоек и передвижений",
//         "Базовые захваты и освобождения",
//         "Простейшие броски и переводы",
//         "Основы борьбы в партере",
//         "Общая физическая подготовка",
//         "Основы правил соревнований",
//         "Индивидуальная тетрадь прогресса",
//         "Спортивная форма (футболка)",
//       ],
//       trainer: "Александр Медведев",
//       color: "from-green-500 to-green-600",
//     },
//     {
//       id: "intermediate",
//       name: "Продвинутый уровень",
//       level: "Средний",
//       duration: "4 месяца",
//       lessons: 32,
//       price: "22,000",
//       monthlyPrice: "5,500",
//       schedule: "4 раза в неделю по 2.5 часа",
//       maxStudents: 10,
//       description: "Углубленное изучение техники с элементами соревновательной подготовки и тактическим анализом",
//       goals: [
//         "Совершенствование базовой техники",
//         "Изучение комбинационных действий",
//         "Развитие тактического мышления",
//         "Подготовка к первым соревнованиям",
//       ],
//       includes: [
//         "Сложные броски и комбинации",
//         "Контратаки и защитные действия",
//         "Тактика ведения поединка",
//         "Борьба в различных захватах",
//         "Специальная физическая подготовка",
//         "Участие в учебных спаррингах",
//         "Анализ видео техники",
//         "Участие в 2-х турнирах",
//         "Персональный план тренировок",
//       ],
//       trainer: "Александр Медведев, Дмитрий Волков",
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       id: "pro",
//       name: "Профессиональный",
//       level: "Эксперт",
//       duration: "6 месяцев",
//       lessons: 48,
//       price: "35,000",
//       monthlyPrice: "5,850",
//       schedule: "5 раз в неделю по 3 часа",
//       maxStudents: 8,
//       description:
//         "Элитная программа для серьезных спортсменов с индивидуальным подходом и профессиональной подготовкой",
//       goals: [
//         "Достижение мастерского уровня техники",
//         "Развитие соревновательного мышления",
//         "Психологическая устойчивость",
//         "Подготовка к высокоуровневым турнирам",
//       ],
//       includes: [
//         "Мастерские техники и их вариации",
//         "Индивидуальная работа с тренером (4 часа/мес)",
//         "Анализ видео поединков",
//         "Психологическая подготовка",
//         "Функциональная и силовая подготовка",
//         "Участие в соревнованиях (4-5 турниров)",
//         "Спортивное питание (консультации)",
//         "Восстановительные процедуры",
//         "Персональный куратор",
//         "Экипировка для соревнований",
//       ],
//       trainer: "Дмитрий Волков, Марина Козлова",
//       color: "from-purple-500 to-purple-600",
//     },
//   ];

//   const trainers = [
//     {
//       name: "Александр Медведев",
//       title: "Главный тренер, Заслуженный тренер КР",
//       achievements: "МС, Чемпион России 2018, Бронза ЧЕ 2019, Серебро Азиады 2018",
//       experience: "12 лет тренерской работы",
//       education: "КГУФКСиТ, факультет единоборств",
//       specialization: "Техническая подготовка, работа с начинающими и средним уровнем",
//       students: "Подготовил 15 МС, 47 КМС",
//       image: "👨‍🏫",
//       quote: '"Каждый может стать чемпионом, если готов работать над собой каждый день"',
//     },
//     {
//       name: "Дмитрий Волков",
//       title: "Старший тренер по спортивному мастерству",
//       achievements: "МСМК, Серебро ЧМ 2020, Участник ОИ-2021, 3-кратный Чемпион Азии",
//       experience: "8 лет тренерской работы",
//       education: "РГУФКСМиТ, Высшая школа тренеров",
//       specialization: "Соревновательная подготовка, работа с профессионалами",
//       students: "Подготовил 8 МСМК, 23 МС",
//       image: "🥇",
//       quote: '"Победа начинается в голове, а заканчивается на ковре"',
//     },
//     {
//       name: "Марина Козлова",
//       title: "Тренер по физической и функциональной подготовке",
//       achievements: "МС по борьбе, КМС по тяжелой атлетике, Сертифицированный реабилитолог",
//       experience: "6 лет тренерской работы",
//       education: "КГМА, спортивная медицина + КГУФКСиТ",
//       specialization: "ОФП, СФП, реабилитация, спортивное питание",
//       students: "Работает с 200+ спортсменами",
//       image: "💪",
//       quote: '"Сильное тело - основа для сильного духа и техники"',
//     },
//   ];

//   const schedule = [
//     {
//       time: "09:00-11:00",
//       monday: "Начинающие (Группа А)",
//       tuesday: "ОФП + Растяжка",
//       wednesday: "Начинающие (Группа А)",
//       thursday: "ОФП + Техника",
//       friday: "Начинающие (Группа А)",
//       saturday: "Открытая тренировка",
//       sunday: "Отдых / Восстановление",
//     },
//     {
//       time: "11:30-14:00",
//       monday: "Продвинутые",
//       tuesday: "Продвинутые + Спарринг",
//       wednesday: "Продвинутые",
//       thursday: "Тактическая подготовка",
//       friday: "Спарринги + Анализ",
//       saturday: "Турниры / Соревнования",
//       sunday: "Индивидуальные занятия",
//     },
//     {
//       time: "16:00-19:00",
//       monday: "Профессионалы",
//       tuesday: "Профессионалы + Анализ",
//       wednesday: "Профессионалы",
//       thursday: "Инд. работа + Профи",
//       friday: "Интенсивные спарринги",
//       saturday: "Индивидуальная работа",
//       sunday: "Восстановление + СПА",
//     },
//     {
//       time: "19:30-21:30",
//       monday: "Любители + Хобби",
//       tuesday: "Любители + ОФП",
//       wednesday: "Любители + Техника",
//       thursday: "Любители + Спарринги",
//       friday: "Открытый мат",
//       saturday: "Мастер-классы",
//       sunday: "Закрыто",
//     },
//   ];

//   const facilities = [
//     {
//       name: "Профессиональный борцовский зал",
//       description: "250 м² с олимпийскими матами UWW, система вентиляции",
//       icon: "🥋",
//       details: "Маты стандарта UWW, освещение 800 лк, климат-контроль",
//     },
//     {
//       name: "Тренажерный зал",
//       description: "Современное оборудование Technogym, 180 м²",
//       icon: "🏋️",
//       details: "Кардио и силовые тренажеры, свободные веса, TRX-зона",
//     },
//     {
//       name: "Кардио и функциональная зона",
//       description: "Беговые дорожки, велотренажеры, функциональный тренинг",
//       icon: "🏃",
//       details: "12 кардио-тренажеров, зона кроссфита, баттл-ропы",
//     },
//     {
//       name: "Spa-зона и восстановление",
//       description: "Сауна, джакузи, массажные кабинеты",
//       icon: "🛁",
//       details: "Финская сауна, инфракрасная сауна, 3 массажных кабинета",
//     },
//     {
//       name: "Медицинский центр",
//       description: "Спортивная медицина, физиотерапия, реабилитация",
//       icon: "🏥",
//       details: "Врач спортмедицины, УЗИ-диагностика, физиотерапия",
//     },
//     {
//       name: 'Спорт-кафе "БОРЕЦ"',
//       description: "Спортивное питание, здоровая еда, протеиновые коктейли",
//       icon: "🥗",
//       details: "Меню от спортивного нутрициолога, свежие соки, добавки",
//     },
//     {
//       name: "Анализ и видео-зона",
//       description: "Видеоанализ техники, тактическая подготовка",
//       icon: "📹",
//       details: "Система записи HD, анализ движений, база данных техник",
//     },
//     {
//       name: "Детская игровая зона",
//       description: "Безопасное пространство для детей родителей-спортсменов",
//       icon: "🎮",
//       details: "Мягкая зона, игрушки, присмотр, Wi-Fi для родителей",
//     },
//   ];

//   const achievements = [
//     { number: "127", label: "Подготовленных мастеров спорта", icon: "🏆" },
//     { number: "2,847", label: "Выпускников академии", icon: "🎓" },
//     { number: "23", label: "Олимпийцев и призеров ЧМ", icon: "🥇" },
//     { number: "89%", label: "Поступают в спортивные ВУЗы", icon: "📚" },
//     { number: "15+", label: "Лет успешной работы", icon: "⭐" },
//     { number: "95%", label: "Положительных отзывов", icon: "❤️" },
//   ];

//   const galleryImages = [
//     { title: "Основной тренировочный зал", desc: "Профессиональные маты UWW" },
//     { title: "Тренировка продвинутой группы", desc: "Изучение сложных техник" },
//     { title: "Индивидуальная работа", desc: "Персональные тренировки с тренером" },
//     { title: "Соревнования академии", desc: "Ежемесячные внутренние турниры" },
//     { title: "Тренажерный зал", desc: "Современное оборудование Technogym" },
//     { title: "Церемония награждения", desc: "Вручение поясов и сертификатов" },
//   ];

//   const testimonials = [
//     {
//       name: "Азамат Токтогулов",
//       age: 19,
//       course: "Профессиональный",
//       achievement: "Чемпион КР 2024, КМС",
//       text: "За полтора года в академии прошел путь от любителя до чемпиона республики. Тренеры - настоящие профессионалы, подход индивидуальный к каждому. Особенно благодарен Дмитрию Волкову за подготовку к соревнованиям.",
//       rating: 5,
//     },
//     {
//       name: "Айгуль Сулайманова",
//       age: 16,
//       course: "Продвинутый",
//       achievement: "1-й разряд, призер ЧА среди юниоров",
//       text: "Пришла сюда год назад совсем новичком. Сейчас уже выполнила 1-й разряд и попала в сборную КР среди юниоров. Академия дала мне не только технику, но и уверенность в себе.",
//       rating: 5,
//     },
//     {
//       name: "Данияр Омуров",
//       age: 23,
//       course: "Профессиональный",
//       achievement: "МС, тренер детской секции",
//       text: "После окончания курса остался работать тренером. Здесь не просто учат бороться, а воспитывают характер. Методика преподавания на высочайшем уровне.",
//       rating: 5,
//     },
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Здесь будет логика отправки формы
//     alert("Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение часа.");
//     setFormData({ name: "", phone: "", course: "", message: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Header */}
//       <header
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           scrolled ? "bg-white shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <nav className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <span className="text-4xl">🥋</span>
//               <div>
//                 <h1 className={`text-2xl font-bold transition-colors ${scrolled ? "text-blue-900" : "text-white"}`}>
//                   Академия Вольной Борьбы
//                 </h1>
//                 <p className={`text-sm transition-colors ${scrolled ? "text-gray-600" : "text-blue-100"}`}>
//                   Элитный центр спортивного мастерства
//                 </p>
//               </div>
//             </div>
//             <div className="hidden md:flex space-x-6">
//               <a
//                 href="#courses"
//                 className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
//               >
//                 Курсы
//               </a>
//               <a
//                 href="#trainers"
//                 className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
//               >
//                 Тренеры
//               </a>
//               <a
//                 href="#schedule"
//                 className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
//               >
//                 Расписание
//               </a>
//               <a
//                 href="#facilities"
//                 className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
//               >
//                 Возможности
//               </a>
//               <a
//                 href="#contact"
//                 className={`hover:text-blue-600 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
//               >
//                 Контакты
//               </a>
//             </div>
//             <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
//               Бесплатная консультация
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white pt-24 pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-6xl font-bold mb-6 leading-tight">
//                 Станьте{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
//                   ЧЕМПИОНОМ
//                 </span>
//               </h2>
//               <p className="text-xl mb-8 text-blue-100 leading-relaxed">
//                 Профессиональная подготовка по вольной борьбе для всех уровней. От первых шагов до олимпийских высот.
//                 Современная методика, опытные тренеры, индивидуальный подход.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                 <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
//                   🚀 Записаться на пробное занятие
//                 </button>
//                 <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all">
//                   📹 Виртуальный тур по академии
//                 </button>
//               </div>
//               <div className="flex items-center space-x-6 text-sm">
//                 <div className="flex items-center">
//                   <span className="text-yellow-400 mr-2">⭐⭐⭐⭐⭐</span>
//                   <span>4.9/5 (247 отзывов)</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="text-green-400 mr-2">✅</span>
//                   <span>Лицензия Минспорта КР</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold mb-6 text-center">Запишитесь сегодня!</h3>
//                 <form className="space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Ваше имя"
//                     className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="+996 XXX XXX XXX"
//                     className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-orange-500 outline-none"
//                   />
//                   <select className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-orange-500 outline-none">
//                     <option>Выберите уровень подготовки</option>
//                     <option>Новичок (никогда не занимался)</option>
//                     <option>Есть базовые навыки</option>
//                     <option>Средний уровень</option>
//                     <option>Продвинутый уровень</option>
//                   </select>
//                   <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
//                     Получить консультацию
//                   </button>
//                 </form>
//                 <p className="text-xs text-center mt-4 text-blue-200">* Пробное занятие абсолютно бесплатно</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Achievements Stats */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Наши достижения</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             {achievements.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
//                 <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
//                 <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section id="courses" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h3 className="text-5xl font-bold mb-4 text-gray-800">Программы Обучения</h3>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Выберите программу, соответствующую вашему уровню подготовки и целям. Каждый курс включает теоретическую и
//               практическую части с персональным сопровождением.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8 mb-16">
//             {courses.map((course, index) => (
//               <div
//                 key={course.id}
//                 className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ${
//                   selectedCourse === index
//                     ? "ring-4 ring-blue-500 shadow-2xl transform scale-105"
//                     : "hover:shadow-2xl hover:scale-102"
//                 }`}
//                 onClick={() => setSelectedCourse(index)}
//               >
//                 <div className={`bg-gradient-to-r ${course.color} p-6 text-white relative`}>
//                   <div className="absolute top-4 right-4 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
//                     {course.level}
//                   </div>
//                   <h4 className="text-2xl font-bold mb-2">{course.name}</h4>
//                   <div className="flex items-baseline mb-2">
//                     <span className="text-4xl font-bold">{course.price}</span>
//                     <span className="text-lg ml-1">сом</span>
//                     <span className="text-sm ml-2 opacity-75">за весь курс</span>
//                   </div>
//                   <div className="text-sm opacity-90">или {course.monthlyPrice} сом/месяц</div>
//                 </div>

//                 <div className="p-6">
//                   <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Длительность:</span>
//                       <span className="font-semibold">{course.duration}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Занятий:</span>
//                       <span className="font-semibold">{course.lessons}</span>
//                     </div>
//                     <div className="flex justify-between col-span-2">
//                       <span className="text-gray-600">График:</span>
//                       <span className="font-semibold text-xs">{course.schedule}</span>
//                     </div>
//                     <div className="flex justify-between col-span-2">
//                       <span className="text-gray-600">Группа:</span>
//                       <span className="font-semibold">до {course.maxStudents} человек</span>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

//                   <div className="mb-6">
//                     <h5 className="font-semibold text-gray-800 mb-2">Цели курса:</h5>
//                     <ul className="text-sm text-gray-600 space-y-1">
//                       {course.goals.slice(0, 2).map((goal, idx) => (
//                         <li key={idx} className="flex items-start">
//                           <span className="text-green-500 mr-2 mt-0.5">•</span>
//                           {goal}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="text-xs text-gray-500 mb-4">
//                     <strong>Ведет:</strong> {course.trainer}
//                   </div>

//                   <button
//                     className={`w-full py-3 rounded-xl font-semibold transition-all ${
//                       selectedCourse === index
//                         ? `bg-gradient-to-r ${course.color} text-white shadow-lg`
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     }`}
//                   >
//                     {selectedCourse === index ? "✓ Выбрано - Подробнее" : "Выбрать курс"}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Course Details */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <div className={`bg-gradient-to-r ${courses[selectedCourse].color} text-white p-6 rounded-xl mb-8`}>
//               <h4 className="text-3xl font-bold mb-2">Программа курса: {courses[selectedCourse].name}</h4>
//               <p className="text-xl opacity-90">{courses[selectedCourse].description}</p>
//             </div>

//             <div className="grid lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2">
//                 <h5 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
//                   <span className="text-2xl mr-3">📚</span>
//                   Программа включает:
//                 </h5>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {courses[selectedCourse].includes.map((item, index) => (
//                     <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
//                       <span className="text-green-500 mr-3 mt-1 text-lg">✓</span>
//                       <span className="text-gray-700">{item}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-8">
//                   <h5 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
//                     <span className="text-xl mr-3">🎯</span>
//                     Основные цели курса:
//                   </h5>
//                   <div className="space-y-3">
//                     {courses[selectedCourse].goals.map((goal, index) => (
//                       <div key={index} className="flex items-start">
//                         <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
//                           {index + 1}
//                         </span>
//                         <span className="text-gray-700">{goal}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl mb-6">
//                   <h6 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
//                     <span className="text-xl mr-2">💰</span>
//                     Стоимость и условия
//                   </h6>
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-700">Полная стоимость:</span>
//                       <span className="text-2xl font-bold text-blue-900">{courses[selectedCourse].price} сом</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-700">Ежемесячно:</span>
//                       <span className="text-lg font-semibold text-green-600">
//                         {courses[selectedCourse].monthlyPrice} сом
//                       </span>
//                     </div>
//                     <div className="border-t pt-3">
//                       <div className="text-sm text-gray-600 space-y-1">
//                         <p>
//                           <strong>Продолжительность:</strong> {courses[selectedCourse].duration}
//                         </p>
//                         <p>
//                           <strong>Занятий:</strong> {courses[selectedCourse].lessons}
//                         </p>
//                         <p>
//                           <strong>Размер группы:</strong> до {courses[selectedCourse].maxStudents} чел.
//                         </p>
//                         <p>
//                           <strong>Расписание:</strong> {courses[selectedCourse].schedule}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-green-50 p-6 rounded-xl mb-6">
//                   <h6 className="text-lg font-bold text-green-800 mb-3">🎁 Бонусы при записи</h6>
//                   <ul className="text-sm text-green-700 space-y-1">
//                     <li>• Бесплатное пробное занятие</li>
//                     <li>• Индивидуальная консультация</li>
//                     <li>• Скидка 10% при полной оплате</li>
//                     <li>• Фирменная футболка академии</li>
//                   </ul>
//                 </div>

//                 <div className="space-y-3">
//                   <button
//                     className={`w-full bg-gradient-to-r ${courses[selectedCourse].color} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105`}
//                   >
//                     🚀 Записаться на этот курс
//                   </button>
//                   <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
//                     📞 Получить консультацию
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trainers Section */}
//       <section id="trainers" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h3 className="text-5xl font-bold mb-4 text-gray-800">Наши Тренеры</h3>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Команда профессионалов с международным опытом и проверенными результатами. Каждый тренер - эксперт в своей
//               области с индивидуальным подходом к ученикам.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {trainers.map((trainer, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all hover:scale-105"
//               >
//                 <div className="text-center mb-6">
//                   <div className="text-8xl mb-4">{trainer.image}</div>
//                   <h4 className="text-2xl font-bold text-blue-900 mb-2">{trainer.name}</h4>
//                   <p className="text-orange-500 font-semibold mb-4">{trainer.title}</p>
//                 </div>

//                 <div className="space-y-4 text-sm">
//                   <div>
//                     <h6 className="font-semibold text-gray-800 mb-1">🏆 Спортивные достижения:</h6>
//                     <p className="text-gray-600">{trainer.achievements}</p>
//                   </div>

//                   <div>
//                     <h6 className="font-semibold text-gray-800 mb-1">📚 Образование:</h6>
//                     <p className="text-gray-600">{trainer.education}</p>
//                   </div>

//                   <div>
//                     <h6 className="font-semibold text-gray-800 mb-1">⏱️ Тренерский стаж:</h6>
//                     <p className="text-gray-600">{trainer.experience}</p>
//                   </div>

//                   <div>
//                     <h6 className="font-semibold text-gray-800 mb-1">🎯 Специализация:</h6>
//                     <p className="text-gray-600">{trainer.specialization}</p>
//                   </div>

//                   <div>
//                     <h6 className="font-semibold text-gray-800 mb-1">👥 Подготовил спортсменов:</h6>
//                     <p className="text-gray-600">{trainer.students}</p>
//                   </div>
//                 </div>

//                 <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
//                   <p className="text-sm italic text-blue-700">{trainer.quote}</p>
//                 </div>

//                 <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
//                   💬 Записаться на консультацию
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Schedule Section */}
//       <section id="schedule" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h3 className="text-5xl font-bold mb-4 text-gray-800">Расписание Занятий</h3>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Удобное расписание для разных уровней подготовки. Занятия проходят ежедневно с утра до вечера. Возможность
//               отработки пропущенных занятий в других группах.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
//               <h4 className="text-2xl font-bold text-white text-center">📅 Недельное расписание</h4>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-4 py-4 text-left font-bold text-gray-800">⏰ Время</th>
//                     <th className="px-4 py-4 text-center font-bold text-gray-800">ПН</th>
//                     <th className="px-4 py-4 text-center font-bold text-gray-800">ВТ</th>
//                     <th className="px-4 py-4 text-center font-bold text-gray-800">СР</th>
//                     <th className="px-4 py-4 text-center font-bold text-gray-800">ЧТ</th>
//                     <th className="px-4 py-4 text-center font-bold text-gray-800">ПТ</th>
//                     <th className="px-4 py-4 text-center font-bold text-gray-800">СБ</th>
//                     <th className="px-4 py-4 text-center font-bold text-gray-800">ВС</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {schedule.map((row, index) => (
//                     <tr
//                       key={index}
//                       className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
//                     >
//                       <td className="px-4 py-4 font-bold text-blue-900 border-r border-gray-200">{row.time}</td>
//                       <td className="px-4 py-4 text-center text-sm">{row.monday}</td>
//                       <td className="px-4 py-4 text-center text-sm">{row.tuesday}</td>
//                       <td className="px-4 py-4 text-center text-sm">{row.wednesday}</td>
//                       <td className="px-4 py-4 text-center text-sm">{row.thursday}</td>
//                       <td className="px-4 py-4 text-center text-sm">{row.friday}</td>
//                       <td className="px-4 py-4 text-center text-sm">{row.saturday}</td>
//                       <td className="px-4 py-4 text-center text-sm text-gray-400">{row.sunday}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="text-3xl mb-3">🆓</div>
//               <h5 className="font-bold text-gray-800 mb-2">Пробные занятия</h5>
//               <p className="text-sm text-gray-600">
//                 Бесплатно для всех новых учеников. Предварительная запись обязательна.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="text-3xl mb-3">🔄</div>
//               <h5 className="font-bold text-gray-800 mb-2">Отработка пропусков</h5>
//               <p className="text-sm text-gray-600">Возможность посетить занятие в другой группе при пропуске.</p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="text-3xl mb-3">👤</div>
//               <h5 className="font-bold text-gray-800 mb-2">Индивидуальные занятия</h5>
//               <p className="text-sm text-gray-600">По предварительной договоренности с тренером. Стоимость отдельно.</p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="text-3xl mb-3">🏖️</div>
//               <h5 className="font-bold text-gray-800 mb-2">Каникулы</h5>
//               <p className="text-sm text-gray-600">
//                 Зимние (2 недели) и летние (2 недели) каникулы с перерасчетом оплаты.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Facilities Section */}
//       <section id="facilities" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h3 className="text-5xl font-bold mb-4 text-gray-800">Инфраструктура Академии</h3>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Современное оборудование мирового класса, комфортные условия для тренировок и восстановления. Все
//               необходимое для профессиональной подготовки под одной крышей.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
//             {facilities.map((facility, index) => (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:scale-105"
//               >
//                 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{facility.icon}</div>
//                 <h4 className="text-lg font-bold text-blue-900 mb-3 leading-tight">{facility.name}</h4>
//                 <p className="text-gray-600 mb-3 text-sm leading-relaxed">{facility.description}</p>
//                 <div className="text-xs text-gray-500 bg-gray-100 p-3 rounded-lg">
//                   <strong>Детали:</strong> {facility.details}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Gallery */}
//           <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
//             <h4 className="text-3xl font-bold text-center mb-8 text-blue-900">📸 Галерея академии</h4>
//             <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
//               <div className="aspect-video bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-6xl mb-4">🏢</div>
//                   <h5 className="text-2xl font-bold text-blue-900 mb-2">{galleryImages[currentImageIndex].title}</h5>
//                   <p className="text-blue-700">{galleryImages[currentImageIndex].desc}</p>
//                 </div>
//               </div>
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {galleryImages.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//                       currentImageIndex === index ? "bg-blue-600" : "bg-white bg-opacity-50"
//                     }`}
//                     onClick={() => setCurrentImageIndex(index)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h3 className="text-5xl font-bold mb-4 text-gray-800">Отзывы Наших Спортсменов</h3>
//             <p className="text-xl text-gray-600">Истории успеха тех, кто уже достиг своих целей в нашей академии</p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
//                 <div className="flex items-center mb-4">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h5 className="font-bold text-gray-800">{testimonial.name}</h5>
//                     <p className="text-sm text-gray-600">
//                       {testimonial.age} лет, курс "{testimonial.course}"
//                     </p>
//                     <p className="text-sm text-orange-500 font-semibold">{testimonial.achievement}</p>
//                   </div>
//                 </div>

//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <span key={i} className="text-yellow-400 text-lg">
//                       ⭐
//                     </span>
//                   ))}
//                 </div>

//                 <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h3 className="text-5xl font-bold mb-4">Контакты и Запись</h3>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Свяжитесь с нами любым удобным способом. Мы ответим на все ваши вопросы и поможем выбрать подходящую
//               программу.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             <div>
//               <h4 className="text-3xl font-bold mb-8 flex items-center">
//                 <span className="text-3xl mr-3">📞</span>
//                 Свяжитесь с нами
//               </h4>

//               <div className="space-y-6">
//                 <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
//                   <div className="flex items-start">
//                     <span className="text-3xl mr-4">📍</span>
//                     <div>
//                       <h6 className="font-bold text-lg mb-2">Наш адрес:</h6>
//                       <p className="text-blue-100">г. Бишкек, ул. Спортивная 15, корп. 2</p>
//                       <p className="text-blue-100 text-sm">Рядом с олимпийским центром, парковка на 50 мест</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
//                   <div className="flex items-start">
//                     <span className="text-3xl mr-4">📱</span>
//                     <div>
//                       <h6 className="font-bold text-lg mb-2">Телефоны:</h6>
//                       <p className="text-blue-100">+996 555 123 456 (WhatsApp, Telegram)</p>
//                       <p className="text-blue-100">+996 777 987 654 (звонки)</p>
//                       <p className="text-blue-100 text-sm">Отвечаем с 08:00 до 22:00 ежедневно</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
//                   <div className="flex items-start">
//                     <span className="text-3xl mr-4">💌</span>
//                     <div>
//                       <h6 className="font-bold text-lg mb-2">Email и соцсети:</h6>
//                       <p className="text-blue-100">info@wrestlingacademy.kg</p>
//                       <p className="text-blue-100">@wrestling_academy_kg</p>
//                       <p className="text-blue-100 text-sm">Отвечаем на email в течение 2-х часов</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
//                   <div className="flex items-start">
//                     <span className="text-3xl mr-4">🕐</span>
//                     <div>
//                       <h6 className="font-bold text-lg mb-2">Режим работы:</h6>
//                       <div className="text-blue-100 space-y-1">
//                         <p>Пн-Пт: 09:00-22:00</p>
//                         <p>Сб: 09:00-20:00</p>
//                         <p>Вс: 10:00-18:00</p>
//                         <p className="text-sm mt-2">Администрация работает до 21:00</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-3xl font-bold mb-8 flex items-center">
//                 <span className="text-3xl mr-3">📝</span>
//                 Записаться на курс
//               </h4>

//               <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Введите ваше полное имя"
//                       className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-orange-500 outline-none"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold mb-2">Телефон *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="+996 XXX XXX XXX"
//                       className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-orange-500 outline-none"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold mb-2">Выберите курс *</label>
//                     <select
//                       name="course"
//                       value={formData.course}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-orange-500 outline-none"
//                       required
//                     >
//                       <option value="">-- Выберите программу --</option>
//                       <option value="beginner">Начинающий борец (15,000 сом)</option>
//                       <option value="intermediate">Продвинутый уровень (22,000 сом)</option>
//                       <option value="pro">Профессиональный (35,000 сом)</option>
//                       <option value="consultation">Консультация тренера</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold mb-2">Дополнительная информация</label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       placeholder="Ваш уровень подготовки, цели, вопросы..."
//                       rows="4"
//                       className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
//                   >
//                     🚀 Отправить заявку
//                   </button>

//                   <p className="text-xs text-center text-blue-200">
//                     * Отправляя заявку, вы соглашаетесь с обработкой персональных данных
//                     <br />
//                     ** Мы свяжемся с вами в течение 30 минут
//                   </p>
//                 </form>

//                 <div className="mt-8 pt-6 border-t border-white border-opacity-20">
//                   <h6 className="font-semibold mb-4 text-center">🎁 При записи сегодня:</h6>
//                   <ul className="text-sm text-blue-100 space-y-2">
//                     <li className="flex items-center">
//                       <span className="text-green-400 mr-2">✓</span>
//                       Бесплатное пробное занятие
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-400 mr-2">✓</span>
//                       Индивидуальная консультация тренера
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-400 mr-2">✓</span>
//                       Скидка 10% при полной предоплате
//                     </li>
//                     <li className="flex items-center">
//                       <span className="text-green-400 mr-2">✓</span>
//                       Фирменная спортивная форма
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <span className="text-4xl">🥋</span>
//                 <div>
//                   <h5 className="text-xl font-bold">Академия Вольной Борьбы</h5>
//                   <p className="text-gray-400 text-sm">Элитный центр спортивного мастерства</p>
//                 </div>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 Профессиональная подготовка спортсменов по вольной борьбе с 2009 года. Лицензированная академия с
//                 аккредитацией Министерства спорта КР.
//               </p>
//             </div>

//             <div>
//               <h6 className="font-bold mb-4">Программы</h6>
//               <ul className="space-y-2 text-sm text-gray-300">
//                 <li>
//                   <a href="#courses" className="hover:text-white transition-colors">
//                     Начинающий борец
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#courses" className="hover:text-white transition-colors">
//                     Продвинутый уровень
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#courses" className="hover:text-white transition-colors">
//                     Профессиональный
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#schedule" className="hover:text-white transition-colors">
//                     Расписание
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h6 className="font-bold mb-4">Информация</h6>
//               <ul className="space-y-2 text-sm text-gray-300">
//                 <li>
//                   <a href="#trainers" className="hover:text-white transition-colors">
//                     Наши тренеры
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#facilities" className="hover:text-white transition-colors">
//                     Инфраструктура
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Правила академии
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white transition-colors">
//                     Лицензии
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h6 className="font-bold mb-4">Контакты</h6>
//               <div className="space-y-2 text-sm text-gray-300">
//                 <p>📍 г. Бишкек, ул. Спортивная 15</p>
//                 <p>📞 +996 555 123 456</p>
//                 <p>📧 info@wrestlingacademy.kg</p>
//                 <div className="flex space-x-3 mt-4">
//                   <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl">
//                     📘
//                   </a>
//                   <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl">
//                     📷
//                   </a>
//                   <a href="#" className="text-green-400 hover:text-green-300 text-2xl">
//                     💬
//                   </a>
//                   <a href="#" className="text-red-500 hover:text-red-400 text-2xl">
//                     📺
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-700 pt-8 text-center">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 text-sm">© 2025 Академия Вольной Борьбы. Все права защищены.</p>
//               <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
//                 <a href="#" className="hover:text-white transition-colors">
//                   Политика конфиденциальности
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Договор оферты
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Возврат средств
//                 </a>
//               </div>
//             </div>

//             <div className="mt-6 text-xs text-gray-500">
//               <p>Лицензия Министерства спорта КР №SP-2024-001 | Аккредитация UWW (United World Wrestling)</p>
//               <p>Член Федерации борьбы Кыргызской Республики | Партнер Olympic Solidarity Program</p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Floating Action Buttons */}
//       <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
//         <button className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all transform hover:scale-110">
//           💬
//         </button>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all transform hover:scale-110">
//           📞
//         </button>
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="bg-gray-700 hover:bg-gray-800 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all transform hover:scale-110"
//         >
//           ↑
//         </button>
//       </div>

//       {/* Mobile Menu Button (for responsive design) */}
//       <div className="md:hidden fixed top-4 right-4 z-50">
//         <button className="bg-white bg-opacity-90 backdrop-blur-sm text-blue-900 w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
//           ☰
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WrestlingAcademy;
