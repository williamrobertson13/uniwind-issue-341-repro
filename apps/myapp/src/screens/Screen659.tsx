import { Pressable, Text, View } from 'react-native';

import { copy659 } from '../generated/copy/copy659';
import { layout659 } from '../generated/layouts/layout659';
import { palette659 } from '../generated/palettes/palette659';

export function Screen659() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout659.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy659.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy659.detail} / {palette659.name}
			</Text>
		</View>
	);
}
