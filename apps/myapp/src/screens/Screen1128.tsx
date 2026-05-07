import { Pressable, Text, View } from 'react-native';

import { copy1128 } from '../generated/copy/copy1128';
import { layout1128 } from '../generated/layouts/layout1128';
import { palette1128 } from '../generated/palettes/palette1128';

export function Screen1128() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1128.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1128.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1128.detail} / {palette1128.name}
			</Text>
		</View>
	);
}
