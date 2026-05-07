import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy46 } from '../generated/copy/copy46';
import { layout46 } from '../generated/layouts/layout46';
import { palette46 } from '../generated/palettes/palette46';

const RuntimeView46 = withUniwind(View);

export function Screen46() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView46 styleClassName={layout46.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy46.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy46.detail} / {palette46.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
