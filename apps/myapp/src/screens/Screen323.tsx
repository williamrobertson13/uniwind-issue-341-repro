import { Pressable, Text, View } from 'react-native';

import { copy323 } from '../generated/copy/copy323';
import { layout323 } from '../generated/layouts/layout323';
import { palette323 } from '../generated/palettes/palette323';

export function Screen323() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout323.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy323.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy323.detail} / {palette323.name}
			</Text>
		</View>
	);
}
