import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy367 } from '../generated/copy/copy367';
import { layout367 } from '../generated/layouts/layout367';
import { palette367 } from '../generated/palettes/palette367';

const RuntimeView367 = withUniwind(View);

export function Screen367() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView367 styleClassName={layout367.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy367.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy367.detail} / {palette367.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
