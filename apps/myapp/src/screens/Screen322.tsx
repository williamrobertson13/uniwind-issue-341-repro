import { Pressable, Text, View } from 'react-native';

import { copy322 } from '../generated/copy/copy322';
import { layout322 } from '../generated/layouts/layout322';
import { palette322 } from '../generated/palettes/palette322';

export function Screen322() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout322.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy322.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy322.detail} / {palette322.name}
			</Text>
		</View>
	);
}
