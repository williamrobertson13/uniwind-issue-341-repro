import { Pressable, Text, View } from 'react-native';

import { copy1225 } from '../generated/copy/copy1225';
import { layout1225 } from '../generated/layouts/layout1225';
import { palette1225 } from '../generated/palettes/palette1225';

export function Screen1225() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout1225.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1225.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1225.detail} / {palette1225.name}
			</Text>
		</View>
	);
}
