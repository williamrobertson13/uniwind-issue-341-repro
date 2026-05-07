import { Pressable, Text, View } from 'react-native';

import { copy1322 } from '../generated/copy/copy1322';
import { layout1322 } from '../generated/layouts/layout1322';
import { palette1322 } from '../generated/palettes/palette1322';

export function Screen1322() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1322.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1322.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1322.detail} / {palette1322.name}
			</Text>
		</View>
	);
}
