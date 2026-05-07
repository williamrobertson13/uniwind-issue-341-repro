import { Pressable, Text, View } from 'react-native';

import { copy475 } from '../generated/copy/copy475';
import { layout475 } from '../generated/layouts/layout475';
import { palette475 } from '../generated/palettes/palette475';

export function Screen475() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout475.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy475.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy475.detail} / {palette475.name}
			</Text>
		</View>
	);
}
