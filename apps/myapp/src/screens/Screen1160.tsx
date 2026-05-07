import { Pressable, Text, View } from 'react-native';

import { copy1160 } from '../generated/copy/copy1160';
import { layout1160 } from '../generated/layouts/layout1160';
import { palette1160 } from '../generated/palettes/palette1160';

export function Screen1160() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1160.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy1160.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1160.detail} / {palette1160.name}
			</Text>
		</View>
	);
}
