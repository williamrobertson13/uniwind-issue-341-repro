import { Pressable, Text, View } from 'react-native';

import { copy703 } from '../generated/copy/copy703';
import { layout703 } from '../generated/layouts/layout703';
import { palette703 } from '../generated/palettes/palette703';

export function Screen703() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout703.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy703.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy703.detail} / {palette703.name}
			</Text>
		</View>
	);
}
