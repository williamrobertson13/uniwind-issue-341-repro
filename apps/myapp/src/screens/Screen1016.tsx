import { Pressable, Text, View } from 'react-native';

import { copy1016 } from '../generated/copy/copy1016';
import { layout1016 } from '../generated/layouts/layout1016';
import { palette1016 } from '../generated/palettes/palette1016';

export function Screen1016() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1016.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1016.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1016.detail} / {palette1016.name}
			</Text>
		</View>
	);
}
