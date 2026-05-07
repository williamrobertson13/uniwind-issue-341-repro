import { Pressable, Text, View } from 'react-native';

import { copy1360 } from '../generated/copy/copy1360';
import { layout1360 } from '../generated/layouts/layout1360';
import { palette1360 } from '../generated/palettes/palette1360';

export function Screen1360() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1360.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1360.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1360.detail} / {palette1360.name}
			</Text>
		</View>
	);
}
