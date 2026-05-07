import { Pressable, Text, View } from 'react-native';

import { copy1256 } from '../generated/copy/copy1256';
import { layout1256 } from '../generated/layouts/layout1256';
import { palette1256 } from '../generated/palettes/palette1256';

export function Screen1256() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1256.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1256.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1256.detail} / {palette1256.name}
			</Text>
		</View>
	);
}
