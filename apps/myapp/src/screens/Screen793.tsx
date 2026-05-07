import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy793 } from '../generated/copy/copy793';
import { layout793 } from '../generated/layouts/layout793';
import { palette793 } from '../generated/palettes/palette793';

const RuntimeView793 = withUniwind(View);

export function Screen793() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView793 styleClassName={layout793.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy793.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy793.detail} / {palette793.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
