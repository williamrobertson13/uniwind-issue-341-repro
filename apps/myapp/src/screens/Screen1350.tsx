import { Pressable, Text, View } from 'react-native';

import { copy1350 } from '../generated/copy/copy1350';
import { layout1350 } from '../generated/layouts/layout1350';
import { palette1350 } from '../generated/palettes/palette1350';

export function Screen1350() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1350.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1350.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1350.detail} / {palette1350.name}
			</Text>
		</View>
	);
}
