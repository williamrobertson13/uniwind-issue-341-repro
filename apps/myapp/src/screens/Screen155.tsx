import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy155 } from '../generated/copy/copy155';
import { layout155 } from '../generated/layouts/layout155';
import { palette155 } from '../generated/palettes/palette155';

const RuntimeView155 = withUniwind(View);

export function Screen155() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView155 styleClassName={layout155.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy155.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy155.detail} / {palette155.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
