import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [calculatorData, setCalculatorData] = useState({
    volume: '285000',
    distance: '50',
    service: 'standard'
  });

  const gasholders = [
    {
      id: 1,
      name: 'Газгольдер 2700 л',
      volume: '2700 л',
      price: '285 000',
      description: 'Для небольших домов до 100 м²',
      power: 'До 20 кВт',
      warranty: '5 лет',
      image: 'https://cdn.poehali.dev/projects/0b1153cc-8d15-4947-8c18-d87249641373/files/fb9021ad-2fb0-4d5d-946f-f8d471de8239.jpg'
    },
    {
      id: 2,
      name: 'Газгольдер 5000 л',
      volume: '5000 л',
      price: '445 000',
      description: 'Для домов 100-200 м²',
      power: 'До 35 кВт',
      warranty: '7 лет',
      popular: true,
      image: 'https://cdn.poehali.dev/projects/0b1153cc-8d15-4947-8c18-d87249641373/files/fb9021ad-2fb0-4d5d-946f-f8d471de8239.jpg'
    },
    {
      id: 3,
      name: 'Газгольдер 10000 л',
      volume: '10000 л',
      price: '685 000',
      description: 'Для больших домов от 200 м²',
      power: 'До 70 кВт',
      warranty: '10 лет',
      image: 'https://cdn.poehali.dev/projects/0b1153cc-8d15-4947-8c18-d87249641373/files/fb9021ad-2fb0-4d5d-946f-f8d471de8239.jpg'
    }
  ];

  const services = [
    {
      icon: 'Hammer',
      title: 'Монтаж под ключ',
      description: 'Полный цикл установки газгольдера: земляные работы, монтаж оборудования, подключение к системе отопления'
    },
    {
      icon: 'Wrench',
      title: 'Сервисное обслуживание',
      description: 'Регулярное техническое обслуживание, диагностика, заправка газом, гарантийный и постгарантийный ремонт'
    },
    {
      icon: 'FileCheck',
      title: 'Проектирование',
      description: 'Разработка проекта газификации, расчет оптимального объема резервуара, согласование документации'
    },
    {
      icon: 'Truck',
      title: 'Доставка и заправка',
      description: 'Быстрая доставка оборудования по Москве и области, регулярная заправка газом по выгодным ценам'
    }
  ];

  const advantages = [
    { icon: 'Zap', title: 'Автономность', desc: 'Полная независимость от центральных сетей' },
    { icon: 'DollarSign', title: 'Экономия', desc: 'В 2-3 раза дешевле электричества' },
    { icon: 'ShieldCheck', title: 'Безопасность', desc: 'Сертифицированное оборудование' },
    { icon: 'Clock', title: 'Долговечность', desc: 'Срок службы до 50 лет' }
  ];

  const calculatePrice = () => {
    const basePrice = parseInt(calculatorData.volume);
    const distanceFee = parseInt(calculatorData.distance) * 100;
    const serviceFee = calculatorData.service === 'premium' ? 50000 : 0;
    return (basePrice + distanceFee + serviceFee).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Fuel" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ГазХолдер Про
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Расчет</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Автономная газификация для вашего дома
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Установка газгольдеров под ключ в Москве и Московской области. 
                Гарантия 10 лет, монтаж за 2 дня.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="text-center animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                    <Icon name={adv.icon} className="text-primary mx-auto mb-2" size={32} />
                    <div className="font-semibold">{adv.title}</div>
                    <div className="text-sm text-muted-foreground">{adv.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/0b1153cc-8d15-4947-8c18-d87249641373/files/258e3def-c82a-4dd2-a197-dccf41a80b2b.jpg" 
                alt="Газгольдер"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-3xl font-bold text-primary">от 285 000 ₽</div>
                <div className="text-sm text-muted-foreground">установка под ключ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог газгольдеров</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный объем для вашего дома</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gasholders.map((item) => (
              <Card key={item.id} className="relative hover:shadow-xl transition-shadow duration-300">
                {item.popular && (
                  <Badge className="absolute top-4 right-4 bg-secondary">Популярный</Badge>
                )}
                <CardHeader>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Gauge" size={20} className="text-primary" />
                      <span className="text-sm">Объем: <strong>{item.volume}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-primary" />
                      <span className="text-sm">Мощность: <strong>{item.power}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ShieldCheck" size={20} className="text-primary" />
                      <span className="text-sm">Гарантия: <strong>{item.warranty}</strong></span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-3xl font-bold text-primary mb-4">{item.price} ₽</div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Заказать консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Услуги установки и обслуживания</h2>
            <p className="text-xl text-muted-foreground">Полный спектр работ от проектирования до обслуживания</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <img 
              src="https://cdn.poehali.dev/projects/0b1153cc-8d15-4947-8c18-d87249641373/files/c63e266e-bb30-471f-b6ea-01b2ff7f4dc8.jpg"
              alt="Процесс установки"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl">Калькулятор стоимости</CardTitle>
                <CardDescription>Рассчитайте примерную стоимость установки газгольдера</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="quick" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="quick">Быстрый расчет</TabsTrigger>
                    <TabsTrigger value="detailed">Подробный расчет</TabsTrigger>
                  </TabsList>
                  <TabsContent value="quick" className="space-y-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="volume">Объем газгольдера</Label>
                      <select 
                        id="volume"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={calculatorData.volume}
                        onChange={(e) => setCalculatorData({...calculatorData, volume: e.target.value})}
                      >
                        <option value="285000">2700 л - 285 000 ₽</option>
                        <option value="445000">5000 л - 445 000 ₽</option>
                        <option value="685000">10000 л - 685 000 ₽</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="distance">Расстояние от МКАД (км)</Label>
                      <Input 
                        id="distance" 
                        type="number" 
                        placeholder="50"
                        value={calculatorData.distance}
                        onChange={(e) => setCalculatorData({...calculatorData, distance: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Пакет услуг</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Card 
                          className={`cursor-pointer transition-all ${calculatorData.service === 'standard' ? 'ring-2 ring-primary' : ''}`}
                          onClick={() => setCalculatorData({...calculatorData, service: 'standard'})}
                        >
                          <CardHeader>
                            <CardTitle className="text-lg">Стандарт</CardTitle>
                            <CardDescription>Базовая установка</CardDescription>
                          </CardHeader>
                        </Card>
                        <Card 
                          className={`cursor-pointer transition-all ${calculatorData.service === 'premium' ? 'ring-2 ring-primary' : ''}`}
                          onClick={() => setCalculatorData({...calculatorData, service: 'premium'})}
                        >
                          <CardHeader>
                            <CardTitle className="text-lg">Премиум</CardTitle>
                            <CardDescription>+ 50 000 ₽</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-6 mt-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-lg text-muted-foreground mb-1">Примерная стоимость:</div>
                          <div className="text-4xl font-bold text-primary">{calculatePrice()} ₽</div>
                        </div>
                        <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                          Получить точный расчет
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="detailed" className="space-y-4 mt-6">
                    <p className="text-center text-muted-foreground py-8">
                      Для подробного расчета с учетом всех параметров заполните форму обратной связи, 
                      и наш специалист свяжется с вами в течение 15 минут.
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Заказать подробный расчет
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">Офис в Москве</div>
                    <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">Ежедневно с 8:00 до 21:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-lg">info@gazpro.ru</div>
                    <div className="text-muted-foreground">Ответим в течение часа</div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы перезвоним в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                  <Input placeholder="Email" type="email" />
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="h-[600px] bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" className="mx-auto mb-4 text-muted-foreground" size={64} />
                <p className="text-muted-foreground">Карта Москвы и области</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Fuel" className="text-primary" size={28} />
                <span className="text-xl font-bold">ГазХолдер Про</span>
              </div>
              <p className="text-gray-400">Автономная газификация домов в Москве и области</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Газгольдеры 2700 л</li>
                <li>Газгольдеры 5000 л</li>
                <li>Газгольдеры 10000 л</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Монтаж под ключ</li>
                <li>Обслуживание</li>
                <li>Проектирование</li>
                <li>Заправка газом</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@gazpro.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГазХолдер Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
