import { Pressable, Text, View } from 'react-native';

import { copy195 } from '../generated/copy/copy195';
import { layout195 } from '../generated/layouts/layout195';
import { palette195 } from '../generated/palettes/palette195';

export function Screen195() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout195.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy195.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy195.detail} / {palette195.name}
			</Text>
		</View>
	);
}
