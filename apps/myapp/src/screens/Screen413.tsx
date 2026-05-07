import { Pressable, Text, View } from 'react-native';

import { copy413 } from '../generated/copy/copy413';
import { layout413 } from '../generated/layouts/layout413';
import { palette413 } from '../generated/palettes/palette413';

export function Screen413() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout413.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy413.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy413.detail} / {palette413.name}
			</Text>
		</View>
	);
}
