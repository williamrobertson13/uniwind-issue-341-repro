import { Pressable, Text, View } from 'react-native';

import { copy835 } from '../generated/copy/copy835';
import { layout835 } from '../generated/layouts/layout835';
import { palette835 } from '../generated/palettes/palette835';

export function Screen835() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout835.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy835.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy835.detail} / {palette835.name}
			</Text>
		</View>
	);
}
