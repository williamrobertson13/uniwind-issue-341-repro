import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy609 } from '../generated/copy/copy609';
import { layout609 } from '../generated/layouts/layout609';
import { palette609 } from '../generated/palettes/palette609';

const RuntimeView609 = withUniwind(View);

export function Screen609() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView609 styleClassName={layout609.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy609.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy609.detail} / {palette609.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
