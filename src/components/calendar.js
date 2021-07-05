import { DatePicker, Space } from 'antd';

const Calendar = () => {
	const { RangePicker } = DatePicker;

	return (
		<Space direction="vertical" size={12} className="calendar">
			<RangePicker className="calendar-input" />
		</Space>
	)
}

export default Calendar;