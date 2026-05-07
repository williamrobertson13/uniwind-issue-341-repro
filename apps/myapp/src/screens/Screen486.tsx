import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy486 } from '../generated/copy/copy486';
import { layout486 } from '../generated/layouts/layout486';
import { palette486 } from '../generated/palettes/palette486';

const RuntimeView486 = withUniwind(View);

export function Screen486() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView486 styleClassName={layout486.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy486.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy486.detail} / {palette486.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
