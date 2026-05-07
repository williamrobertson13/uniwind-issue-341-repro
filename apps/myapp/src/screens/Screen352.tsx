import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy352 } from '../generated/copy/copy352';
import { layout352 } from '../generated/layouts/layout352';
import { palette352 } from '../generated/palettes/palette352';

const RuntimeView352 = withUniwind(View);

export function Screen352() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView352 styleClassName={layout352.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy352.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy352.detail} / {palette352.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
