import { Pressable, Text, View } from 'react-native';

import { copy1184 } from '../generated/copy/copy1184';
import { layout1184 } from '../generated/layouts/layout1184';
import { palette1184 } from '../generated/palettes/palette1184';

export function Screen1184() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1184.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1184.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1184.detail} / {palette1184.name}
			</Text>
		</View>
	);
}
