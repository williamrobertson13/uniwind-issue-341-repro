import { Pressable, Text, View } from 'react-native';

import { copy465 } from '../generated/copy/copy465';
import { layout465 } from '../generated/layouts/layout465';
import { palette465 } from '../generated/palettes/palette465';

export function Screen465() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout465.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy465.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy465.detail} / {palette465.name}
			</Text>
		</View>
	);
}
