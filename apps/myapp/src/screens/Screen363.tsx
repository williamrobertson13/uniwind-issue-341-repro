import { Pressable, Text, View } from 'react-native';

import { copy363 } from '../generated/copy/copy363';
import { layout363 } from '../generated/layouts/layout363';
import { palette363 } from '../generated/palettes/palette363';

export function Screen363() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout363.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy363.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy363.detail} / {palette363.name}
			</Text>
		</View>
	);
}
