import { Pressable, Text, View } from 'react-native';

import { copy579 } from '../generated/copy/copy579';
import { layout579 } from '../generated/layouts/layout579';
import { palette579 } from '../generated/palettes/palette579';

export function Screen579() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout579.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy579.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy579.detail} / {palette579.name}
			</Text>
		</View>
	);
}
