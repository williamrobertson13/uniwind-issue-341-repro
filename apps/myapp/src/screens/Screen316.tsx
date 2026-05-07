import { Pressable, Text, View } from 'react-native';

import { copy316 } from '../generated/copy/copy316';
import { layout316 } from '../generated/layouts/layout316';
import { palette316 } from '../generated/palettes/palette316';

export function Screen316() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout316.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy316.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy316.detail} / {palette316.name}
			</Text>
		</View>
	);
}
