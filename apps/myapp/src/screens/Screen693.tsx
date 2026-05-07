import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy693 } from '../generated/copy/copy693';
import { layout693 } from '../generated/layouts/layout693';
import { palette693 } from '../generated/palettes/palette693';

const RuntimeView693 = withUniwind(View);

export function Screen693() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView693 styleClassName={layout693.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy693.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy693.detail} / {palette693.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
