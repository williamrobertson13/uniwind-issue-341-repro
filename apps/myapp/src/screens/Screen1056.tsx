import { Pressable, Text, View } from 'react-native';

import { copy1056 } from '../generated/copy/copy1056';
import { layout1056 } from '../generated/layouts/layout1056';
import { palette1056 } from '../generated/palettes/palette1056';

export function Screen1056() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1056.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1056.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1056.detail} / {palette1056.name}
			</Text>
		</View>
	);
}
