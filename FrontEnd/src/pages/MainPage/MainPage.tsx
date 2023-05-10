import { Filter } from '../../components/Filters';
import { NewsItem } from '../../components/NewsItem';
import { Products } from '../../components/Products';
import { SearchBar } from '../../components/SearchBar';
// import { Carousel } from 'antd';
import Slider from "react-slick";
import { Button, Menu, MenuProps } from 'antd';
import Icon, { MailOutlined } from "@ant-design/icons"
import { useAppSelector } from '../../hooks/redux';
import './MainPage.scss';

export function MainPage(): JSX.Element {

	const { filter } = useAppSelector(state => state.FilterReducer);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// initialSlide: -1,
		nextArrow: <img src='right-arrow.svg' />,
		prevArrow: <img src='left-arrow.svg' />
	}
	// list for news carousel
	const news = [
		<NewsItem key={1} link={'/'} image='/News1.png' />,
		<NewsItem key={2} link={'/'} image='/News2.png' />,
		<NewsItem key={3} link={'/'} image='/News3.png' />,
	];
	type MenuItem = Required<MenuProps>['items'][number];

	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: 'group',
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
			type,
		} as MenuItem;
	}

	const items: MenuItem[] = [
		getItem('Категории', 'sub1', <Icon component={() => (<img className='img_leaf' src="/leafwhite.svg" />)} />, [
			getItem('Ампельные растения', '0'),
			getItem('Бонсай', '1'),
			getItem('Бромелиевые', '2'),
			getItem('Декоративно-лиственные', '3'),
			getItem('Деревья и кустарники', '4'),
			getItem('Кактусы', '5'),
			getItem('Луковичные', '6'),
			getItem('Орхидеи', '7'),
		])
	]

	const onClick: MenuProps['onClick'] = (e) => {
		console.log('click ', e);
	};

	return (
		<>
			<div className='search_bar'>
				{/* <Button className="btn_category" type='primary' icon={<Icon component={() => (<img className='img_leaf' src="/leafwhite.svg" />)} />} >Категории</Button> */}
				<Menu
					onClick={onClick}
					style={{ width: 215 }}
					defaultSelectedKeys={['1']}
					// defaultOpenKeys={['sub1']}
					mode="inline"
					items={items} />
				<SearchBar />
			</div>
			{/* TODO navigate to searchPage */}
			{filter.search
				?
				<br />
				:
				<section className='news_slider'>
					<Slider {...settings}>
						{news}
					</Slider>
				</section>
			}
			<div className="products">
				<Filter />
				<Products />
			</div>
		</>
	)
}
