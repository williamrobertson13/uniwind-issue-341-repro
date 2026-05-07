import { Pressable, Text, View } from 'react-native';

import { copy57 } from '../generated/copy/copy57';
import { layout57 } from '../generated/layouts/layout57';
import { palette57 } from '../generated/palettes/palette57';

export function Screen57() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout57.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy57.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy57.detail} / {palette57.name}
			</Text>
		</View>
	);
}
