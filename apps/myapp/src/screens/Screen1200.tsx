import { Pressable, Text, View } from 'react-native';

import { copy1200 } from '../generated/copy/copy1200';
import { layout1200 } from '../generated/layouts/layout1200';
import { palette1200 } from '../generated/palettes/palette1200';

export function Screen1200() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1200.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1200.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1200.detail} / {palette1200.name}
			</Text>
		</View>
	);
}
