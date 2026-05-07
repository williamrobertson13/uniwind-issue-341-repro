import { Pressable, Text, View } from 'react-native';

import { copy945 } from '../generated/copy/copy945';
import { layout945 } from '../generated/layouts/layout945';
import { palette945 } from '../generated/palettes/palette945';

export function Screen945() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout945.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy945.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy945.detail} / {palette945.name}
			</Text>
		</View>
	);
}
