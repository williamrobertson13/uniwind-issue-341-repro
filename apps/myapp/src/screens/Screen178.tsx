import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy178 } from '../generated/copy/copy178';
import { layout178 } from '../generated/layouts/layout178';
import { palette178 } from '../generated/palettes/palette178';

const RuntimeView178 = withUniwind(View);

export function Screen178() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView178 styleClassName={layout178.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy178.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy178.detail} / {palette178.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
