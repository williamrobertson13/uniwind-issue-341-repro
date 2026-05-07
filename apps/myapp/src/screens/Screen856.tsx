import { Pressable, Text, View } from 'react-native';

import { copy856 } from '../generated/copy/copy856';
import { layout856 } from '../generated/layouts/layout856';
import { palette856 } from '../generated/palettes/palette856';

export function Screen856() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout856.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy856.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy856.detail} / {palette856.name}
			</Text>
		</View>
	);
}
