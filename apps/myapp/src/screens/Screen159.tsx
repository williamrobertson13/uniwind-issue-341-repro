import { Pressable, Text, View } from 'react-native';

import { copy159 } from '../generated/copy/copy159';
import { layout159 } from '../generated/layouts/layout159';
import { palette159 } from '../generated/palettes/palette159';

export function Screen159() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout159.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy159.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy159.detail} / {palette159.name}
			</Text>
		</View>
	);
}
